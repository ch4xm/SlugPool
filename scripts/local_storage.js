import AsyncStorage from "@react-native-async-storage/async-storage";

export const addCarpool = (uname, pickup, dropoff, cap, date, time, contact, car) => {
    //username, pickup place, dropoff place, capacity, date, time, contact info, car description
    const data = {
        username: uname,
        pickup: pickup,
        dropoff: dropoff,
        capacity: cap,
        date: date,
        time: time,
        contactInfo: contact,
        car: car,
        passengerArr: []
    }
    AsyncStorage.setItem(uname, JSON.stringify(data));
}

export const addPassenger = (carpool_username, passenger) => {
    let tmp = AsyncStorage.getItem(JSON.parse(carpool_username));

    if (tmp.passengerArr.includes(passenger)) {
        console.log('Passenger is already in the carpool group');
    } else if (tmp.passengerArr.length >= tmp.capacity) {
        console.log('Carpool is full');
    } else {
        tmp.passengerArr.push(passenger);
    }

    AsyncStorage.setItem(carpool_username, JSON.stringify(tmp));
}

export const removeCarpool = async (username, cInfo) => {
    if(await AsyncStorage.getItem(username) != null && await AsyncStorage.getItem(username).contactInfo == cInfo) {
        await AsyncStorage.removeItem(username);
    }
}

export const removePassenger = (carpool_username, passenger) => {
    let tmp = AsyncStorage.getItem(JSON.parse(carpool_username));

    tmp.passengerArr = tmp.passengerArr.filter(item => item !== passenger);

    AsyncStorage.setItem(carpool_username, JSON.stringify(tmp));
}
