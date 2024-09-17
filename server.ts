import { Hono } from 'hono'
import { serveStatic } from 'hono/bun' //Para mostrar el archivo directo html

const app = new Hono() 

//LLamada a la API
app.post('/api/generate-image', async(c) => {
  try {
    const { inputs } = await c.req.json()
    const response = await fetch("https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev", {
      headers: { 
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ inputs })
    });
    if (!response.ok) {
      throw new Error('Failed to generate image')
    }

    //Crear estructura para devolverselo al cliente
    const contentType = response.headers.get('Content-Type') || 'application/octet-stream';
    const arrayBuffer = await response.arrayBuffer();

    return new Response(arrayBuffer, {
      status: response.status,
      headers: { 'Content-Type': contentType }
    });

    //Con esto te aseguras de tener el control de lo que devuelves, si quieres algo simple puedes hacer return response --> Es decir devolver lo que te de la API en su formato

  } catch (error) {
    //Error
    console.error('Error generating image:', error)
    return c.json({ error: 'Error generating image' }, 500)
  }
})

//LLamada al index.html
app.use('/*', serveStatic({ root: './src' }))


const port = parseInt(process.env.PORT!) || 80
console.log(`Running at http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
