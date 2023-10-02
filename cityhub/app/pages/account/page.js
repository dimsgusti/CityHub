import Link from "next/link"
import styles from '../../components/layout.module.css'

export default function Login(){
    return(
        <main className="w-full h-full mt-4">
            <div className="flex justify-center text-center">
                <div className="w-[30rem] h-[15rem] rounded-lg border border-solid rounded-xl">
                    <h1 className="text-xl font-bold m-4">Login</h1>
                    <form className="flex flex-col items-center gap-6">
                        <input type="text" className="w-1/2 h-[2rem] p-2" placeholder="Username"></input>
                        <input type="password" className="w-1/2 h-[2rem] p-2" placeholder="Password"></input>
                        <input type="submit" className={styles.btnPrimary}></input>
                    </form>
                </div>

            </div>
        </main>
    )
}