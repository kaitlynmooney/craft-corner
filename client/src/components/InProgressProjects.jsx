import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/itemTypes';

const InProgressProjects = ({ projects, handleDropProject }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PROJECT,
        drop: (item) => handleDropProject(item.project),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });

    return (
        <div ref={drop} style={{ backgroundColor: isOver ? 'lightblue' : 'transparent', minHeight: '100px' }}>
            Drop in-progress projects here!
        </div>
    );
};

export default InProgressProjects; 