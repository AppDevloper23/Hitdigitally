import { ServiceDropdown } from './Dropdowndata';


const Dropdown = () => {
    return (
        <>
            <ul className="submenu">
                {ServiceDropdown.map(item => {
                    return (
                        <li key={item.id}>
                            <a href={`/service${item.path}`} state={item} className={item.Sname}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown;