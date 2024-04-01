(
 async()=>{
    function delay(time:number){
        const promise =new Promise<string>
        ((resolve)=>{
            setTimeout(()=>{
                resolve('Soy una promesa me demoro ༼ つ ◕_◕ ༽つ');
                console.log('Hola');
            },time)
    })
    return promise;
    }
    const result = await delay(3000);
    console.log(result);
 }
)();