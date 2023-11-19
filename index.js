let forms=document.forms
        forms[0].addEventListener("submit",(e)=>{
            e.preventDefault()
            let obj={
                user:e.target[0].value,
                pass:e.target[1].value
            }
            fetch("http://localhost:3000/posts",{
                method:"GET",
            }).then((val)=>{
                return val.json();
            }).then((val)=>{
                console.log(val);
            })
            // fetch("http://localhost:3000/posts",{
            //     method:"POST",
            //     headers:{"Content-Type": "application/json"},
            //     body:JSON.stringify(obj)
            // })
            // fetch("http://localhost:3000/posts/2",{
            //     method:"PATCH",
            //     headers:{"Content-Type": "application/json"},
            //     body:JSON.stringify({
            //         user:"karthik"
            //     })
            // })
            // fetch("http://localhost:3000/posts/2",{
            //     method:"PUT",
            //     headers:{"Content-Type": "application/json"},
            //     body:JSON.stringify({
            //         user:"karthik"
            //     })
            // })
            // fetch("http://localhost:3000/posts/3",{
            //     method:"DELETE",
            //     headers:{"Content-Type": "application/json"},
            //     body:JSON.stringify({
            //         user:"karthi"
            //     })
            // })
        })