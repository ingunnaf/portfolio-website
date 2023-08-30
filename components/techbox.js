import { SiGooglecloud, 
    SiKubernetes,
    SiPrometheus
} from "react-icons/si";
import Image from "next/image";


export default function ({
    name,
    icon: Icon,
  }) {
    return (
    <div className="border rounded-lg p-4 transition duration-300 ease-in-out transform hover:shadow-lg flex flex-row justify-center items-center bg-indigo-50 rounded-lg p-4 pb-3 mb-5 mr-5" style={{ width: '125px' }}>
        <div className="flex flex-col justify-center items-center">
            <div className="text-4xl text-rose-900 mb-2">
                <Icon />
            </div>
            <h3 className="text-lg font-medium text-center">{name}</h3>
        </div>
    </div>);
}