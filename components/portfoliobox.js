import { SiGooglecloud, 
    SiKubernetes,
    SiPrometheus
} from "react-icons/si";
import Image from "next/image";


export default function PortfolioBox({
    title,
    aboutProject,
    imagePath,
  }) {
    return (
        
            <div className="border rounded-lg p-4 transition duration-300 ease-in-out transform hover:shadow-lg flex flex-row items-center bg-indigo-50 rounded-lg p-4 w-1/2 " style={{ width: 'calc(50% - 20px)' }}>
                    
                    <div className="flex-1 p-2">
                        <h3 className="text-lg font-medium pt-8 pb-2 text-rose-900">{title}</h3>
                        <p>{aboutProject}</p>
                        <div className="flex text-4xl justify-left gap-16 py-3 text-rose-900">
                            <SiGooglecloud />
                            <SiKubernetes />
                            <SiPrometheus />    
                        </div>
                    </div>

                    <Image
                        className="rounded-lg object-cover"
                        width={256}
                        height={256}
                        layout="fixed"
                        src={imagePath}
                    />
            </div>
        );
}