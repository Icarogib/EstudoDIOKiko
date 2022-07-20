function getAdmins(map){
    let admins = [];
    /*for(let entry of map){ //teste do map
       console.log(entry);
    }*/

    for(let [key, value] of map){
        //console.log(key);
        //console.log(value);
        if(value === 'admin')
            admins.push(key);
    }
    return admins;
}

const myMap = new Map();

myMap.set('Jao', 'admin');
myMap.set('Victor', 'admin');
myMap.set('Pedro', 'user');
myMap.set('Roberto', 'admin');
myMap.set('Robson', 'user');

//console.log(myMap.get('Robson'));
//console.log(myMap.has('Roberto'));
//console.log(myMap.size);

console.log(getAdmins(myMap));