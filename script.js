const url = "http://localhost:3000/tarefa";

fetch(url)
    .then( data => { return data.json() } )
    .then( resp => {


         for ( let i = 0; i< resp.length; i++ ) {

            let table = resp;

            let corpo_tabela = document.getElementById("tbody");

            let linha = document.createElement("tr");

            let campo_date_st = document.createElement("td");
            let campo_date_fim = document.createElement("td");
            let campo_desc    = document.createElement("td");
            let campo_status  = document.createElement("td");
            let campo_ops  = document.createElement("td");

            let btn_edit         =  document.createElement("button");
            let btn_excluir      =  document.createElement("button");

      
            btn_excluir.id = "btn_excluir";

               

            btn_edit.className      = 'btn_edit';
            btn_excluir.className   =  'btn_excluir';

            let texto_date_st = document.createTextNode(table[i].date_start);
            let texto_date_fim = document.createTextNode(table[i].date_end);
            let texto_desc    = document.createTextNode(table[i].desc_list);
            let texto_status  = document.createTextNode(table[i].status);
            let btn_editar_text  = document.createTextNode("Editar");
            let btn_excluir_text  = document.createTextNode("Excluir");   
            
            let span_status   =  document.createElement('span');

            span_status.appendChild( texto_status );


            btn_edit.appendChild( btn_editar_text ); 
            btn_excluir.appendChild( btn_excluir_text );
         

            campo_date_st.appendChild(texto_date_st);
            campo_date_fim.appendChild(texto_date_fim);
            campo_desc.appendChild(texto_desc);
            campo_status.appendChild(span_status);
            campo_ops.appendChild(btn_edit);
            campo_ops.appendChild(btn_excluir);

            linha.appendChild(campo_date_st);
            linha.appendChild(campo_date_fim);
            linha.appendChild(campo_desc);
            linha.appendChild(campo_status);
            linha.appendChild(campo_ops);


            corpo_tabela.appendChild(linha);



           
                
         }

    });




    function save() {

        let date_st = document.getElementById("d_ini").value;
        let date_fim = document.getElementById("d_fim").value;
        let status = document.getElementById("status").value;
        let desc = document.getElementById("desc").value;    


     
           if ( date_st != "" && date_fim != "" && status != "" && desc != "" ) {

       

                       const data = {
                 
                                date_start: date_st,
                                date_end: date_fim,
                                status: status,
                                desc_list: desc
                 
                       }
                 
                       const otherPram = {
                          headers:{
                             'Content-Type': 'application/json'
                          },
                          dataType: 'json',
                          body: JSON.stringify(data),
                          method: "POST"
                       }     
                          
                 
                       fetch(url, otherPram)
                          .then( data=>{ return data.text() })
                          .then( res=>{console.log(res) })
                          .catch( error=>console.log({error}) )

                          window.location.reload()
     
     
     
           }  else {
     
                 alert("Preencha todos os campos!!");
     
           }    


           document.getElementById("d_start").value     = "";
           document.getElementById("d_end").value       = "";
           document.getElementById("status").value      = "";
           document.getElementById("text_desc").value   = "";

   };



// LIMPAR CAMPOS DO FORM
function limpar()
{
   document.getElementById("d_ini").value     = "";
   document.getElementById("d_fim").value       = "";
   document.getElementById("status").value      = "";
   document.getElementById("desc").value   = "";
}