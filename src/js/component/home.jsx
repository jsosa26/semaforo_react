import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const rojoEnc ="rojoEnc";
	const amarilloEnc ="amarilloEnc";
	const verdeEnc ="verdeEnc";
	const rojoApag ="rojoApag";
	const amarilloApag ="amarilloApag";
	const verdeApag ="verdeApag";

	const [luzRoja, setLightRed] = useState(rojoApag);
	const [luzAmarilla, setLightYellow] = useState(amarilloApag);
	const [luzVerde, setLightGreen] = useState(verdeApag);

		return (
			<div className="main-content">
			<h1 className="text-center mt-5">El gran Semaforo</h1>
				<div className="cuerpo">
					<div className={luzRoja} onClick={()=>setLightRed(rojoEnc) + setLightYellow(amarilloApag) + setLightGreen(verdeApag)}></div>
					<div className={luzAmarilla} onClick={()=>setLightYellow(amarilloEnc) + setLightRed(rojoApag) + setLightGreen(verdeApag)}></div>
					<div className={luzVerde} onClick={()=>setLightGreen(verdeEnc) + setLightYellow(amarilloApag) + setLightRed(rojoApag)}></div>				
				</div>
			</div>
		);
};

export default Home;
