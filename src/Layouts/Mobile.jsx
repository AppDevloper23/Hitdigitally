import { ServiceDropdown } from './Dropdowndata';


const Mobile = () => {
    return (

        <ul className="mobile-sub-menu">

            {ServiceDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <a href={`/service/${item.id}`} state={item} className={item.Sname}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>

    )
}

export default Mobile;