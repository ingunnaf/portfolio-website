import { SiGooglecloud, 
    SiKubernetes,
    SiPrometheus
} from "react-icons/si";
import Image from "next/image";


export default function ({
    name,
    imagePath,
  }) {
    return (
    <div className="flex flex-row items-center bg-indigo-50 rounded-lg p-4 " style={{ width: '100px' }}>

        <div className="text-4xl gap-16 py-3 text-rose-900">
            {imagePath}
        </div>
        <h3 className="text-lg font-medium pt-8 pb-2">{name}</h3>
        </div>);
}