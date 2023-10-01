import Link from "next/link";

export default function StudentList(){
    return (
        <div>
            <h1>StudentList</h1>
            <ul>
                <li>
                    <Link href="/studentlist/1">Anil</Link>
                    </li>

                <li>
                <Link href="studentlist/2">Ayush</Link>
                </li>
                <li>
                <Link href="studentlist/3">Alex</Link>
                </li>
                <li>
                <Link href="studentlist/4">Abishek</Link>
                </li>
            </ul>
        </div>
    )
}