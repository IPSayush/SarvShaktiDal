 const delay = (d) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve()
        }, d * 1000);
    })
  }
  export {delay}