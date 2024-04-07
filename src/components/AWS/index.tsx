

const DATA = [

    {
        id:1,
        title:'What is Cloud Computing?',
        description:'In this module you will learn about what is cloud computing and what are the features and where AWS fits in along with AWS Regions and Availability Zones and EC2.        ',
        url:'https://www.ingenious.co.uk/wp-content/uploads/2023/08/What-is-Cloud-Computing.jpeg'
    },
    {
        id:2,
        title:'EC2 Service Features',
        description:'In this section you will learn Security Groups, Elastic IP, Custom AMI and Launch Template Instance Types and Family, Reserved and Spot Instance, User Data, Autoscaling Group.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWBGq0JcZApAEELQJIFYewMF7X3VGzxE6em7UrrbRJQ&s'
    },
    {
        id:3,
        title:'AWS Networking',
        description:'In this module you will learn about AWS networking topics like VPC, Subnet, Route Tables, Internet Gateway, Nat Gateway, Public and Private Subnets AND Elastic Load Balancer.',
        url:'https://media.licdn.com/dms/image/D5612AQFL8W1goz6qrQ/article-cover_image-shrink_720_1280/0/1679967164325?e=2147483647&v=beta&t=Naqebp4UD8aom_MsjcvSgKanFddmFuu0M1M0v0tPMJ8'
    },

    {
        id:4,
        title:'AWS Storage ',
        description:'In this module you will learn Simple Storage Service (S3) ,,Elastic Block Storage (EBS), Elastic File Storage (EFS), AWS Backup.',
        url:'https://digitalcloud.training/wp-content/uploads/2022/01/AWS-Storage.jpg'
    },

    {
        id:5,
        title:'Serverless',
        description:'In this module you will learn about AWS Fargate, AWS AppSync, AWS Lambda.  What is serverless computing? | Serverless definition .  Serverless computing is a method of providing backend services on an as-used basis. Servers are still used, but a company that gets backend services from a serverless vendor is charged based on usage, not a fixed amount of bandwidth or number of servers.       ',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVZWn6LCn-bYxgfUgjwfeJc1CcWNvs0rROvNsN-w8Aw&s'
    },
    {
        id:6,
        title:'Security',
        description:'In this section you will learn AWS Firewall AND AWS WAF, AWS Guardduty, AWS Shiled, AWS Macie, AWS Inspector, AWS Detective, AWS Key Management AND AWS Certificate Manager',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaY5WZjp8MlqMM72Pyf0frsc6FrF-MjvmfciVLxmVxkQ&s'
    },

    {
        id:7,
        title:'Compliance Management',
        description:'AWS Artifact, AWS Audit Manager, AWS Cognito, Cloud HSM, AWS SSO, AWS IAM AND AWS Directory Management.        ',
        url:'https://media.licdn.com/dms/image/C5612AQHD-BifPCuSNQ/article-cover_image-shrink_600_2000/0/1569588723913?e=2147483647&v=beta&t=ctXSzD6waU7GDoWE_birISiATTqtWlpLQeoklWJerWc'
    },

    {
        id:8,
        title:'Management and Governance',
        description:'In this module you will learn about AWS CloudFormation, AWS Cloudtrail, AWS Cloudwatch, AWS CLI, AND AWS Config and AWS Trusted Advisor, AWS Well Architected Framework, AWS Elastic Transcoder and AWS Kinesis Video Streamer.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRke2SiktCMj6SFhz_Xf64P5129qVA0Tqo8tnnw-d6w&s'
    },

   




]

export default function AWS() {
  return (
    <div id="aws" className=" flex flex-col justify-around mt-[100px] border-t-4 pt-[70px] border-gray-100 ">
    <section className=" flex flex-col items-center justify-center text-center  ">
    <h2 className="text-4xl font-bold  mb-8 font-sans">AWS Solutions Architect Contents</h2>


{
    DATA.map(data=><div key={data.id} className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
    <span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>{data.id}</span>
    <div className='flex flex-col py-10 '>
        <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> {data.title}</h1>
        <p className='py-5 px-0 w-[90%] text-left font-sans'>{data.description}</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
        <img src={data.url} alt="Image 3" className="w-full h-auto shadow-md" style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
      </div></div>)
}





    </section>
    </div>




  )
}
