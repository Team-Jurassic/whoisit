export async function getFetch(url) {
    
    const res = await fetch(url);
    
    // console.log(res.json()); // api로 호출해도 

    const data = await res.json();

    console.log(data.name);


}

// export function getNickName() {
    
// }


