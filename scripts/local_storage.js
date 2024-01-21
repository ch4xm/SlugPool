import AsyncStorage from "@react-native-async-storage/async-storage";

export const addCarpool = (value) => {
    //username, pickup place, dropoff place, capacity, date, time, contact info, car description
    const data = {
        username: value[0],
        pickup: value[1],
        dropoff: value[2],
        capacity: value[3],
        date: value[4],
        time: value[5],
        contactInfo: value[6],
        car: value[7],
        passengerArr: value[8]
    }
    AsyncStorage.setItem(value[0], JSON.stringify(data));
}

export const addPassenger = (carpool_username, passenger) => {
    let tmp = AsyncStorage.getItem(JSON.parse(carpool_username));

    if (tmp.passengerArr.includes(passenger)) {
        console.log('Passenger is already in the carpool group');
    } else {
        tmp.passengerArr.push(passenger);
    }

    AsyncStorage.setItem(carpool_username, JSON.stringify(tmp));
}

export const removeCarpool = (username, cInfo) => {
    if(AsyncStorage.getItem(username) != null && AsyncStorage.getItem(username).contactInfo == cInfo) {
        AsyncStorage.removeItem(username);
    }
}

export const removePassenger = (carpool_username, passenger) => {
    let tmp = AsyncStorage.getItem(JSON.parse(carpool_username));

    tmp.passengerArr = tmp.passengerArr.filter(item => item !== passenger);

    AsyncStorage.setItem(carpool_username, JSON.stringify(tmp));
}
