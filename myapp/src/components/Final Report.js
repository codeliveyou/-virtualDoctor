import React from 'react';
import Button from '@mui/material/Button';
import './final.css'

const Page10 = (props) => {
    const {value} = props
    const text=
    `General Information:
A ${value?.age} ${value?._age} old ${value?.race} ${value?.race} ${value?.gender} ${value?.occupation} measuring ${value?.height} in height weighing ${value?.weight} ${value?.u1_1}, and BMI of ${value?.u1_1 === 'kg' && value?.u1_2 === 'm' ? value?.weight / (value?.height * value?.height) : (value?.u1_1 === 'lb' && value?.u1_2 === 'in' ? 703 * value?.weight / (value?.height * value?.height) : "")} arrived at the ER.

Exposure and Symptoms:
Patient arrived to ER ${value?.v2_1} hours after ${value?.v2_2} of ${value?.v2_3 === "yes" ? `${value?.v2_4}` : "unknown poison"}.
Patient seems to expose ${value?.v2_5 === "yes" ? `does ${value?.v2_6}mg` : 'unkown'}.
The cause of poisoning is ${value?.v2_10}.
Patient ${value?.v2_7 === "yes" ? "does" : "does not"} expose to venomus ${value?.v2_7 === "yes" ? value.v2_8 : ""} animal.
patient ${value?.v2_9 === "yes" ? "does" : "does not"} expose to mushroom or plant.
The main symptoms are ${value?.v2_11}. The symptoms started ${value?.v2_12} hours after exposure.
Patient ${value?.v2_13 === "yes" ? "does" : "does not"} experience seizure.

Physical examination:
Patient’s pupil is ${value?.v3_1}. Patient ${value?.v3_2 === "yes" ? "has" : "has not"} CNS depression ${value?.v3_2 === "yes" ? value?.v3_3 : ""}.
Patient ${value?.v3_4 === "yes" ? "has" : "has not"} GI symptoms ${value?.v3_4 === "yes" ? value?.v3_5 : ""}.
Patient ${value?.Neurological === "yes" ? "has" : "has not"} Neurological symptoms ${value?.Neurological === "yes" ? value?._Neurological : ""}.
Patient ${value?.Respiratory === "yes" ? "has" : "has not"} Respiratory symptoms ${value?.Respiratory === "yes" ? value?._Respiratory : ""}.
Patient ${value?.Renal === "yes" ? "has" : "has not"} Renal symptoms ${value?.Renal === "yes" ? value?._Renal : ""}.
Patient ${value?.ocular === "yes" ? "has" : "has not"} ocular symptoms ${value?.ocular === "yes" ? value?._ocular : ""}.
Patient ${value?.Miscellaneous === "yes" ? "has" : "has not"} Miscellaneous symptoms ${value?.Miscellaneous === "yes" ? value?._Miscellaneous : ""}.
The patient ${value?.v3_6 === "yes" ? "has" : "has not"} skin lesions or rashes.
The patient ${value?.v3_7 === "yes" ? "is" : "isn't"} experiencing muscle weakness or paralysis.

Medical history:
${value?.v4_1 === "yes" ? `Patient has ${value?.v4_2}. Patient has previous disease for ${value?.v4_3} years. Patient is taking ${value?.v4_4} for this disease.` : "Patient does not have any previous disease."} 
${value?.v4_5 === "yes" ? `Patient has previous mental disease ${value?.v4_6}. ${value?.v4_7 === "yes" ? `Patient is is taking ${value?.v4_8} for that.` : "Patient is not taking psychiatric drug for that."}` : "Patient does not have any mental disorder."}

Vital Signs:
Patients’ blood pressure is ${value?.v5_1}mmHg/{value?.v5_2}mmHg.
Patient’s pulse rate is ${value?.v5_3} beats per minute.
patient’s respiratory rate is ${value?.v5_4} breaths per minute.
Patient’s temperature is ${value?.v5_5}°C.

ECG:
${value?.v6_1 === "yes" ? "Patients’s ECG is normal." : `Patient has ${value.v6_2 === "yes" ? "QT prolongation" : ""}${value.v6_3 === "yes" ? `${value.v6_2 === "yes" ? "/" : ""}QRS widening` : ""}${value.v6_4 === "yes" ? `${value?.v6_2 === "yes" || value?.v6_3 === "yes" ? "/" : ""}arrhythmia` : ""}.`} 
Patient ${value?.v6_5 === "yes" ? "have" : "have not"} CK-MB elevation. 
Patient ${value?.v6_6 === "yes" ? "have" : "have not"} Chest pain. 
Patient ${value?.v6_7 === "yes" ? "have" : "have not"} heart conduction disturbance such as Heart block. 
Patient ${value?.v6_8 === "yes" ? "have" : "have not"} PR prolongation in ECG. 
${value?.v6_9 === "yes" ? `Patient have ${value?.v6_10} arrhythmia in ECG.` : "Patient have not any arrhythmia ECG."}

Allergies and Social History:
${value?.v7_1 === "yes" ? `The Patient is ${value?.v7_2} allergies.` : "The patient has not known allergies."}
The patient ${value?.v7_3 === "no" ? "does not " : ""}smokes or uses tobacco products.
${value?.v7_4 === "yes" ? `The patient drinks ${value?.v7_5} liters of alcohol ${value?.v7_6} times a week.` : "The patient does not drink alcohol."}
The patient ${value.v7_7 === "yes" ? "" : "does not "}use recreational drgus.

Additional Laboratory Tests:
Calcium level = ${value?.v8_1} ${value?.u8_1}
APAP level = ${value?.v8_18} ${value?.u8_18}
ASA level = ${value?.v8_19} ${value?.u8_19}
ETOH level = ${value?.v8_20} ${value?.u8_20}
Iron level = ${value?.v8_21} ${value?.u8_21}
Blood AST =  ${value?.v8_2} ${value?.u8_2}
Blood ALT = ${value?.v8_3} ${value?.u8_3}
Blood INR = ${value?.v8_4}
Blood PT = ${value?.v8_5}s
Blood PTT = ${value?.v8_6}s
Lactate level = ${value?.v8_7} ${value?.u8_7}
Blood osmolality = ${value?.v8_8} ${value?.u8_8}
Blood glucose = ${value?.v8_9} ${value?.u8_9}
Blood Sodium = ${value?.v8_10} ${value?.u8_10}
Blood Potassium = ${value?.v8_11} ${value?.u8_11}
Blood Sodium bicarbonate = ${value?.v8_12} ${value?.u8_12}
Blood Ph = ${value?.v8_13} pH
Blood creatinine = ${value?.v8_14} ${value?.u8_14}
Blood BUN = ${value?.v8_15} ${value?.u8_15}

${value?.v8_16 === "no" ? "Toxicology screening has not been performed" : `Toxicology screening has been performed and showed ${value?.v8_17}.`}

Treatment and Management:
${value?.v9_1 === "yes" ? `Patient received ${value?.v9_2} treatment.` : "Patient did not receive any treatments or interventions related to the poisoning."} 
${value?.v9_3 === "yes" ? `Patient received ${value?.v9_4} supportive care.` : "Patient did not receive any supportive care related to the poisoning."} 
${value?.v9_5 === "yes" ? `Patient received ${value?.v9_6} antidote of ${value?.v9_7} mg.` : "Patient did not receive any antidote related to the poisoning."} 
`

    const exportTextAsFile = (text) => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
        link.download = `final-report-${date}.txt`;
        link.href = url;

        link.click();
    }

    return (
    <box>
        <div className='report'>
            <pre className='report-txt' value={text}>
                {text}
            </pre>
        </div>
        <Button variant="contained" onClick={() => exportTextAsFile(text)}>Save</Button>
    </box>
    );
}

export default Page10;