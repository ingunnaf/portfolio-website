import { SiGooglecloud, 
    SiKubernetes,
    SiPrometheus
} from "react-icons/si";
import Image from "next/image";


export default function PortfolioBox({
    title,
    aboutProject,
    imagePath,
    icons = [],
  }) {
    return (
        
            <div id="portfoliobox" className="border rounded-lg p-4 transition duration-300 ease-in-out transform hover:shadow-lg flex flex-col sm:flex-row items-center bg-indigo-50 rounded-lg p-4" >
                    
                    <div className="flex-1 p-2">
                        <h3 className="text-lg font-medium pt-8 pb-2 text-rose-900">{title}</h3>
                        <p>{aboutProject}</p>
                        <div className="icon-container flex text-4xl justify-left gap-16 py-3 text-rose-900">
                            {icons.length > 0 && icons.map((Icon, index) => <Icon key={index} />)}
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