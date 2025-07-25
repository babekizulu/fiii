//components
import Link from "./Link";

function SidePanel() {
    return (
        <article className='side-panel'>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href='/mechanics'>
                            Mechanics
                        </Link>
                    </li>
                    <li>
                        <Link href='/economics'>
                            Economics
                        </Link>
                    </li>
                    <li>
                        <Link href='/accounting'>
                            Accounting
                        </Link>
                    </li>
                </ul>
            </nav>
        </article>
    )
}

export default SidePanel;