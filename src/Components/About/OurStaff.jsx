import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const OurStaff = () => {

const staffData = [

{
name:"Dr. Fozia Tabassum Cheema",
qualification:"Ph.D (Sports Sciences & Physical Education), MA Punjabi, B.Ed",
designation:"Associate Professor / Vice Principal",
department:"Health & Physical Education (H&P Edu)",
experience:"29 Years",
admin:"Vice principal, Controller of Examination, Media Committee, Sports Committee, Security Committee, Beautification Committee, Trip Committee, College Council Member"
},

{
name:"Mrs. Farina Waqar",
qualification:"M.A English Literature",
designation:"Associate Professor",
department:"English",
experience:"24 Years",
admin:"HOD English, In-charge Admission Committee"
},

{
name:"Mrs. Noumana Yaseen Chughtai",
qualification:"M.A English",
designation:"Associate Professor",
department:"English",
experience:"17 Years",
admin:"Incharge Girls Guide, Editor Magazine (English Section), Member Debate Society"
},

{
name:"Mrs. Attika Azhar",
qualification:"M.A English",
designation:"Assistant Professor",
department:"English",
experience:"13 Years",
admin:"ADP Coordinator"
},

{
name:"Mrs. Faiza Azhar",
qualification:"MS Organic Chemistry",
designation:"Associate Professor",
department:"Chemistry",
experience:"14 Years",
admin:"In-Charge Timetable"
},

{
name:"Mrs. Gul-e-Zahra",
qualification:"MS Library Science",
designation:"Senior Librarian",
department:"Library Science",
experience:"29 Years",
admin:"In-charge of College Library"
},

{
name:"Mrs. Sumeera Shaheen",
qualification:"MS Nano-Tech (Solid State Physics)",
designation:"Associate Professor",
department:"Physics",
experience:"27 Years",
admin:"Co-Incharge Bursar, CTI Induction Committee, Canteen Committee"
},

{
name:"Mrs. Ansa Zenib",
qualification:"MS Software Engineering",
designation:"Associate Professor",
department:"Computer Science",
experience:"14 Years",
admin:"HOD, IT Related Tasks"
},

{
name:"Mrs. Maria Masood",
qualification:"MS Zoology",
designation:"Assistant Professor",
department:"Zoology",
experience:"14 Years",
admin:"HOD Biology, Gardening Incharge"
},

{
name:"Ms. Munazza Ashraf",
qualification:"M.Phil Biology",
designation:"Lecturer",
department:"Biology",
experience:"8 Years",
admin:"Member of Admission Committee"
},

{
name:"Mrs. Nosheen Ghulam Nabi",
qualification:"M.Phil (GCU Lahore), MA Punjab University",
designation:"Associate Professor",
department:"Persian",
experience:"28 Years",
admin:"College Council Member, Tabulation Incharge"
},

{
name:"Mrs. Sana Ijaz",
qualification:"M.Phil Mathematics",
designation:"Assistant Professor",
department:"Mathematics",
experience:"13 Years",
admin:"Member Tabulation, Sports, PTM Committee"
},

{
name:"Mrs. Saira Akhtar",
qualification:"MSc Mathematics",
designation:"Associate Professor",
department:"Mathematics",
experience:"30 Years",
admin:"State Officer, College Council Member"
},

{
name:"Mrs. Nadira Noori",
qualification:"M.A Punjabi, M.A Urdu, M.Ed",
designation:"Assistant Professor",
department:"Punjabi",
experience:"30 Years",
admin:"Incharge Co-curricular Activities"
},

{
name:"Mrs. Gulnaz Rafique",
qualification:"M.Phil Statistics",
designation:"Assistant Professor",
department:"Statistics",
experience:"20 Years",
admin:"Incharge Cleanliness Related Tasks"
},

{
name:"Mrs. Munazza Ahtasham",
qualification:"MSc Home Economics",
designation:"Associate Professor",
department:"Home Economics",
experience:"30 Years",
admin:"Co-Incharge Admission Committee"
},

{
name:"Mrs. Rubina Gulnaz",
qualification:"M.Phil Economics",
designation:"Assistant Professor",
department:"Economics",
experience:"16 Years 5 Months",
admin:"Admission Committee, Discipline Committee"
},

{
name:"Mrs. Masooma Kanwal Rizvi",
qualification:"M.Phil Punjab University",
designation:"Assistant Professor",
department:"History",
experience:"17 Years",
admin:"HOD History, Tabulation Incharge"
},

{
name:"Mrs. Darakshan Jabeen",
qualification:"M.Sc Psychology",
designation:"Assistant Professor",
department:"Psychology",
experience:"23 Years 6 Months",
admin:"PTM Incharge, Discipline Committee"
},

{
name:"Mrs. Saba Siddique",
qualification:"M.Phil Clinical Psychology",
designation:"Assistant Professor",
department:"Psychology",
experience:"13 Years",
admin:"Assistant Controller (Intermediate)"
},

{
name:"Mrs. Saman Javed",
qualification:"M.A",
designation:"Assistant Professor",
department:"Fine Arts",
experience:"14 Years",
admin:"Decoration Incharge, Admission Committee"
},

{
name:"Mrs. Tahira Rauf",
qualification:"M.A Urdu",
designation:"Assistant Professor",
department:"Urdu",
experience:"23 Years",
admin:"HOD Urdu, Literary Society"
},

{
name:"Ms. Shahida Ashiq",
qualification:"M.A Education",
designation:"Associate Professor",
department:"Education",
experience:"28 Years 5 Months",
admin:"HOD Education"
},

{
name:"Ms. Fizza Saleem",
qualification:"M.Phil Media & Communication",
designation:"Lecturer",
department:"Journalism",
experience:"3 Years",
admin:"Media Tasks, College Council Member"
},

{
name:"Mrs. Aysha Abdul Khaliq",
qualification:"M.Phil",
designation:"Associate Professor",
department:"Islamiat",
experience:"26 Years",
admin:"Islamic Society Incharge, Welfare Committee"
}

];

return (

<div style={{width:"100%",background:"#f4f6fb",minHeight:"100vh"}}>

<Breadcrumbs links={[{name:"About Us",path:"/about"},{name:"Our Staff"}]} />

<section style={{background:"#1a237e",color:"#fff",textAlign:"center",padding:"70px 20px"}}>
<h1 style={{fontSize:"38px",fontWeight:"800"}}>Our Teaching Staff</h1>
<p style={{marginTop:"10px",opacity:"0.9"}}>
Government Associate College for Women, Chung Lahore
</p>
</section>

<div style={{maxWidth:"1500px",margin:"auto",padding:"60px 20px"}}>

<div style={{overflowX:"auto",boxShadow:"0 8px 25px rgba(0,0,0,0.08)",borderRadius:"10px"}}>

<table style={{width:"100%",borderCollapse:"collapse",background:"#fff"}}>

<thead style={{background:"#1a237e",color:"#fff"}}>

<tr>
<th style={th}>Sr</th>
<th style={th}>Name</th>
<th style={th}>Qualification</th>
<th style={th}>Designation</th>
<th style={th}>Department</th>
<th style={th}>Experience</th>
<th style={th}>Administrative Assignments</th>
</tr>

</thead>

<tbody>

{staffData.map((s,i)=>(

<tr key={i} style={i%2?rowAlt:row}>

<td style={td}>{i+1}</td>
<td style={{...td,fontWeight:"600",color:"#1a237e"}}>{s.name}</td>
<td style={td}>{s.qualification}</td>
<td style={td}>{s.designation}</td>
<td style={td}>{s.department}</td>
<td style={td}>{s.experience}</td>
<td style={{...td,maxWidth:"350px"}}>{s.admin}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

);

};

const th={
padding:"16px 18px",
textAlign:"left",
fontSize:"14px",
textTransform:"uppercase"
};

const td={
padding:"14px 18px",
borderBottom:"1px solid #eee",
fontSize:"15px"
};

const row={background:"#fff"};
const rowAlt={background:"#f8faff"};

export default OurStaff;