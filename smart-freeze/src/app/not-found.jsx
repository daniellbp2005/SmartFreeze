import Link from "next/link";
import Error from "@/components/Error/not-found-body";

export default function NotFound() {
    return (
        <>
            <div className="conteiner">
                <div className="flex">
                    <Error />
                </div>
            </div>
        </>
    )
}