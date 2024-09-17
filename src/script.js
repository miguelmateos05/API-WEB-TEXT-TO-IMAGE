//Función async debido a que la respuesta de la API no es inmediata
async function api(){
    //Comprobar el texto requerido
    const InputText=document.getElementById("input-text").value;
    if(!InputText){
        return alert("Please, enter your text!");
    }

    //Obtencion de datos
    const GeneratedImage=document.getElementById("generated-img");
    const ResultText=document.getElementById("result-text");
   
    //Utilizar gif de carga mientras se ejecuta la API
    GeneratedImage.src="img/loading.gif"; // Mientras se hace la API

    try{
        //LLamada al servidor que ejecute la query
        const response = await fetch("/api/generate-image",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inputs: InputText }),
            }
        );
        
        if(response.ok){
            //Obtener respuesta en formato blob,ejecutar una imagen temporal y su descripcion
            const blob = await response.blob();
            GeneratedImage.src=URL.createObjectURL(blob);
            ResultText.innerText=InputText;
        }else{
            
            throw new Error("API request failed");
        }
    }catch (error) {
            //Error en la llamada
            console.error("Error: ",error.message);
            GeneratedImage.src="img/error.png";
            ResultText.innerText="Failing to connect the API"
            throw error;
    }
}
//Añadir accion al pulsar el boton de generar imagen
document.getElementById("text-btn").addEventListener("click",api);