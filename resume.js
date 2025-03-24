document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // For Taking Input
    const name = document.getElementById('name').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    const linkedin = document.getElementById('linkedinInput').value;
    const portfolio = document.getElementById('portfolioInput').value;
    const image = document.getElementById('myFile').value;
    const aboutMe = document.getElementById('aboutMeInput').value;
    const education = document.getElementById('educationInput').value.split('\n');
    const workExperience = document.getElementById('workInput').value.split('\n'); 
    const skills = document.getElementById('skillsInput').value.split('\n');
    const projects = document.getElementById('projectInput').value.split('\n'); 
    const personalDetails = document.getElementById('personalDetailsInput').value.split('\n'); 
    

    // For updating the resume
    document.getElementById('resumeName').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('email').setAttribute('href',email);
    document.getElementById('phone').textContent = phone;
    document.getElementById('linkedinLink').setAttribute('href', linkedin);
    document.getElementById('portfolioLink').setAttribute('href', portfolio);
    document.getElementById('profilePic').setAttribute('href',image);
    document.getElementById('aboutMe').textContent = aboutMe;

    
    document.getElementById('educationContent').innerHTML = education.map(item => `<li>${item}</li>`).join('');

    document.getElementById('workExperienceContent').innerHTML = workExperience.map(item => `<li>${item}</li>`).join('');

    document.getElementById('technicalSkills').innerHTML = skills.map(item => `<li>${item}</li>`).join('');

    document.getElementById('projectContent').innerHTML = projects.map(item => `<li>${item}</li>`).join('');

    document.getElementById('personalDetailsList').innerHTML = personalDetails.map(item => `<li>${item}</li>`).join('');

    if (!name || !email || !phone || !linkedin || !portfolio || !image || !aboutMe || !education || !workExperience || !skills || !projects || !personalDetails) {
        alert("Please fill out all fields!");
        return;
    }

    alert("Congratulations !!! Resume generated successfully!\nSwipe Down to view and download as pdf");
});

// For Downloading Pdf
document.getElementById('downloadPdfBtn').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;//T his line imports Jspdf 
    const doc = new jsPDF();

    doc.setFont("helvetica", "normal");
    doc.text(20, 20, `Name: ${document.getElementById('resumeName').textContent}`);//20,20 is a coordinate at which following text is added in pdf
    doc.text(20, 30, `Email: ${document.getElementById('email').textContent}`);
    doc.text(20, 40, `Phone: ${document.getElementById('phone').textContent}`);
    doc.text(20, 50, `LinkedIn: ${document.getElementById('linkedinLink').href}`);
    doc.text(20, 60, `Portfolio: ${document.getElementById('portfolioLink').href}`);
    doc.text(20, 70, `About Me: ${document.getElementById('aboutMe').textContent}`);
    doc.text(20, 90, `Education:`);
    let yPosition = 100;
    const educationItems = document.getElementById('educationContent').querySelectorAll('li');
    educationItems.forEach((item, index) => {
        doc.text(20, yPosition, item.textContent);
        yPosition += 10;
    });
    doc.text(20, yPosition + 10, `Work Experience:`);
    yPosition += 20;
    const workExperienceItems = document.getElementById('workExperienceContent').querySelectorAll('li');
    workExperienceItems.forEach((item, index) => {
        doc.text(20, yPosition, item.textContent);
        yPosition += 10;
    });
    doc.text(20, yPosition + 10, `Work Experience:`);
    yPosition += 20;
    const skillsItems = document.getElementById('technicalSkills').querySelectorAll('li');
    skillsItems.forEach((item, index) => {
        doc.text(20, yPosition, item.textContent);
        yPosition += 10;
    });
    
    doc.text(20, yPosition + 20, `Projects:`);
    yPosition += 30;
    const projectItems = document.getElementById('projectContent').querySelectorAll('li');
    projectItems.forEach((item, index) => {
        doc.text(20, yPosition, item.textContent);
        yPosition += 10;
    });
    doc.text(20, yPosition + 10, `Personal Details:`);
    yPosition += 20;
    const personalDetailsItems = document.getElementById('personalDetailsList').querySelectorAll('li');
    personalDetailsItems.forEach((item, index) => {
        doc.text(20, yPosition, item.textContent);
        yPosition += 10;
    });
    doc.save('resume.pdf');
});


