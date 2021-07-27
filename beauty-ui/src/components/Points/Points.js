import "./Points.css"
import { Box } from "@material-ui/core"


export default function Points({donateNumber, recycleNumber}) {


    return (
        <div className="points">
            <br/><br/>
            <div className="header">
            <h1>Points</h1>
            </div>
            <div className="text">
            <div className="graph">
             <Box border={1} borderColor="#2EC4B6">  <h2>Your Total Points: {donateNumber + recycleNumber}</h2> </Box>
            </div>
            <div className="free">
            <Box border={1} borderColor="#2EC4B6">   <h2>Free Products: { Math.round((donateNumber + recycleNumber)/20) }</h2> </Box>
            </div>
            </div>
            <div className="body">
                <h2>For every 20 products you donate or recycle you get a free product on us!
                    Your points are calculated by adding up the number of products you have donated and recycled.
                </h2>
            </div>
        </div>
    )
}