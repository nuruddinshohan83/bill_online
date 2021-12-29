import React from 'react'
import Invoice from "../../components/Invoice"
import Pdf from "react-to-pdf";
const options = {
    orientation: 'landscape',
    unit: 'in'

};
const ref = React.createRef();
export default function index() {
    return (
        <div className='w-full'>

            <div ref={ref}>
                <Invoice />

            </div>
            <Pdf targetRef={ref} options={options} scale={.8} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
        </div>
    )
}
