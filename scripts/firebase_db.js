import {auth} from "./firebase_initialize";

const db = getFirestore(app);
function CreateCarpool() {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [capacity, setCapacity] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [phone, setPhone] = useState('');
    const [car, setCar] = useState('');

    const setCarpool = async(event) => {
        event.preventDefault();
    
        if(pickup === '' || dropoff === '' || capacity === '' || date === '' || time === '' || phone === '' || car === '') {
            alert("Please fill out all fields");
            return;
        }

        const {uid, displayName} = auth.currentUser;

        await addDoc(collection(db, "carpools"), {
            displayName: displayName,
            pickup: pickup,
            dropoff: dropoff,
            capacity: capacity,
            date: date,
            time: time,
            phone: phone,
            car: car,
            uid: uid,
        });

        
    
    }
}

// //pickup place, dropoff place, capacity, date, time, contact info, car description
// const DeleteCarpool = async(event) => {
//     event.preventDefault();

//     if()
// }

// const JoinCarpool = async(event) => {
// }

// const LeaveCarpool = async(event) => {
// }