import pieChart from "@/assets/icons/pie-chart.svg"
import { Dot } from "lucide-react"
import Image from "next/image"

interface ListProps {
    title: string
    list: string[]
}

const List: React.FC<ListProps> = ({
    title,
    list
}) => {
    return (
        <div className="w-full">
            <div className="w-full flex gap-5">
                <div>
                    <div className="p-2 h-10 w-10 rounded-full bg-[#FBE8FF]">
                        <Image src={pieChart} alt="pie-chart" className="w-[3rem]" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <div>
                        {
                            list.map((item, index) => (
                                <div key={index} className="flex">
                                    <Dot />
                                    <h6 className="text-sm">{item}</h6>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List