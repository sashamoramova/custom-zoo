
import AnimalList from '../../Widgets/Animals/AnimalList';

function AnimalsPage({user}) {

    return (
        <>
            <AnimalList user={user} />
        </>
    );
}

export default AnimalsPage;