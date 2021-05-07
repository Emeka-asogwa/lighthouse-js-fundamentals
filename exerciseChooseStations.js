/* ---- The question: In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
The chooseStations function should return the array:

['Bright Lights Elementary', 'Moose Mountain Community Centre'] */


const stations = [['Big Bear Donair', 10, 'restaurant'],['Bright Lights Elementary', 50, 'school'],['Moose Mountain Community Centre', 45, 'community centre']];

const chooseStations= function(stations){
  const saveValues=[]  // making empty list 

  for (const station of stations){
    
    if(station[1]>=20 ){
      if (station[2]==='school' || station[2]==='community centre'){
        saveValues.push(station[0]);

      }

    }
    
}
return saveValues
}

console.log(chooseStations(stations));

