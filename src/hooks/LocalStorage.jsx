export default function useLocalStorage(){
    return {
        setItem: (key , value)=>{
            try{
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(e);
        }
    }
,
getItem :(key, defaultValue) =>{
                try {
                let value =  localStorage.getItem(key);
                return (value !== null) ? JSON.parse(value) : defaultValue ;
                } catch (e) {
                  console.error(e);
                }
}
    }

}