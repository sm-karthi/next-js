export default function Card({ children }: { children: React.ReactNode }) { 

    return(
        <div className="p-[100px] m-[10px] shadow-lg border border-gray-700 flex justify-center
        items-center flex-col">{children}</div>
    )
}