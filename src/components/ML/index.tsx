

const DATA = [

    {
        id:1,
        title:'Programming with Python',
        description:'In this module you will learn the Python programming concepts in detail starting from data types and functions to class and objects.This will create the base for starting the Machine Learning journey with Python.',
        url:'https://developers.redhat.com/sites/default/files/styles/article_feature/public/Python-01%20%282%29.png?itok=TEVIQBQo'
    },
    {
        id:2,
        title:'NumPy',
        description:'NumPy stands for Numerical Python and is a Python library used for working with arrays and has functions for working with linear algebra, fourier transform, and matrices. NumPy was created in 2005 by Travis Oliphant.',
        url:'https://www.learnfly.com/img/post_img/1958855506_learnfly%20-%20numpy.png'
    },
    {
        id:3,
        title:'Pandas',
        description:'Pandas is a Python library used for working with data sets and has functions for analyzing, cleaning, exploring, and manipulating data. "Pandas" has a reference to both "Panel Data", and "Python Data Analysis" and was created by Wes McKinney in 2008. We will use pandas for reading and analyzing data and to analyze big data and make conclusions based on statistical theories in Machine Learning. We will also use pandas to clean messy data sets, and make them readable and relevant.',
        url:'https://cdn.sanity.io/images/oaglaatp/production/7548a09d74442ec36c18b9411e79147ab2275ade-1200x800.png?w=1200&h=800&auto=format'
    },

    {
        id:4,
        title:'Matplotlib',
        description:'In this module you will learn Matplotlib which is a plotting library for the Python programming language and its numerical mathematics extension NumPy and widely used in Machine Learning and Data Science for visiualizations. We will use matplotlib for creating static, animated, and interactive visualizations.',
        url:'https://miro.medium.com/v2/resize:fit:1400/1*yaHK-ailKGO7kQ4viAaYPQ.jpeg'
    },

    {
        id:5,
        title:'Regressions',
        description:'In this module you will learn about regressions and its different types which are used to quantify the relationship between one variable and the other variables that are thought to explain it. Regressions can also identify how close and well determined the relationship is.',
        url:'https://cdn.ttgtmedia.com/rms/onlineimages/5_types_of_regression-f_mobile.png'
    },
    {
        id:6,
        title:'K Nearest Neighbors',
        description:'In this module you will learn about k-nearest neighbors (KNN) algorithm which is a non-parametric, supervised learning classifier, which uses proximity to make classifications or predictions about the grouping of an individual data point and one of the popular and simplest classification and regression classifiers used in machine learning.',
        url:'https://miro.medium.com/v2/resize:fit:1358/1*T8Pnw0kiVbrPGnqnB2I_Zw.jpeg'
    },

    {
        id:7,
        title:'K Means Clustering',
        description:'In this module you will learn about K-Means Clustering which is an unsupervised learning algorithm that is used to solve the clustering problems in machine learning. It is used as partitioning method that divides a dataset into k distinct, non-overlapping subsets (clusters) based on similarity.',
        url:'https://miro.medium.com/v2/resize:fit:1358/1*T8Pnw0kiVbrPGnqnB2I_Zw.jpeg'
    },

    {
        id:8,
        title:'Decision Trees',
        description:'In this module you will learn about Decision Trees (DTs) which are a non-parametric supervised learning method used for classification and regression using which you will create a model that predicts the value of a target variable by learning simple decision rules inferred from the data features.',
        url:'https://miro.medium.com/v2/resize:fit:2000/1*S10T4ah3_JqdQ-eY6Hau0Q.png'
    },

    {
        id:9,
        title:'Random Forests',
        description:'In this module we will learn about Random forest which is a commonly-used machine learning algorithm, which combines the output of multiple decision trees to reach a single result and solve both classification and regression problems.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mfu7SW60WNak5PVMvSyZGqVKcvt2wbTpEPdJL6MK8g&s'
    },

    {
        id:10,
        title:'NLP',
        description:'In this module you will learn about Natural language processing, or NLP, which combines computational linguistics—rule-based modeling of human language—with statistical and machine learning models to enable computers and digital devices to recognize, understand and generate text and speech.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGtUj2qyou0GkynbSF3zhrrYm9izrTizXAUMVJnBHKg&s'
    },
    {
        id:11,
        title:'Model Deployment',
        description:'In this module you will learn about Model Deployment which is the process of integrating your model into an existing production environment where it can take in an input and return an output and make the predictions from your trained machine learning model available to others.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGtUj2qyou0GkynbSF3zhrrYm9izrTizXAUMVJnBHKg&s'
    },




]

export default function ML() {
  return (
    <div id="ml" className=" flex flex-col justify-around mt-[60px] " >
    <section className=" flex flex-col items-center justify-center text-center pt-[20px] ">
    <h2 className="text-4xl font-bold  mb-8 font-sans">Machine Learning Contents</h2>


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
