function getBotResponse(input){
    if (input == "hello" || input == "hi" || input == "hey" || input == "sup" || input == "yo" || input == "what's up" || input == "hie"){
        return "Hello! I'm a bot designed to assist you with tracking your menstrual health. How can I help you today? You can ask me about menstrual cycle tracking, symptom monitoring, fertility prediction, or anything else related to menstrual health.";
    }
    else if (input == "goodbye" || input == "bye" || input == "see you" || input == "see ya" || input == "see you later" || input == "have a good day"){
        return "Goodbye! Take care.";
    }
    else if (input.includes("menstrual cycle") || input.includes("cycle tracking") || input.includes("track my cycle")){
        return "You can track your menstrual cycle by inputting your start and end dates into our calendar interface. Would you like me to guide you through it?";
    }
    else if (input.includes("symptoms") || input.includes("monitor symptoms")){
        return "You can record and monitor symptoms associated with your menstrual cycle using our symptom tracking feature. Would you like more information on how to use it?";
    }
    else if (input.includes("fertility") || input.includes("fertility prediction") || input.includes("predict fertile windows")){
        return "Our platform provides tools for predicting fertile windows based on your menstrual cycle data. Would you like to learn more about how it works?";
    }
    else if (input == "help!" || input == "help"){
        return "If you need further assistance or have any questions, feel free to reach out to our support team at support@periodtracker.com.";
    }
    else if (input.includes("privacy") || input.includes("security") || input.includes("data protection")){
        return "We prioritize user privacy and security. Your data is securely stored and encrypted, and we adhere to strict privacy policies. You can learn more about our privacy practices on our website.";
    }
    else if (input.includes("register") || input.includes("sign up") || input.includes("create account")){
        return "To start tracking your menstrual health, you can create a personalized account on our platform. Would you like me to assist you with the registration process?";
    }
    else if (input.includes("login") || input.includes("sign in")){
        return "If you already have an account, you can sign in using your credentials on our website.";
    }
    else if (input.includes("contact") || input.includes("support") || input.includes("customer service")){
        return "For any inquiries or assistance, you can contact our customer support team at support@periodtracker.com. We're here to help!";
    }
    else if (input.includes("about") || input.includes("about us") || input.includes("company")){
        return "Period Tracker is a comprehensive platform designed to empower individuals to better understand and manage their menstrual health. Our mission is to provide intuitive tools and resources for tracking menstrual cycles, monitoring symptoms, and predicting fertility.";
    }
    else if (input.includes("reminder") || input.includes("notifications") || input.includes("alerts")){
        return "Our platform offers reminder and notification features to help you stay on track with your menstrual health goals. You can set reminders for upcoming cycles, ovulation days, or medication doses.";
    }
    else if (input.includes("community") || input.includes("forum") || input.includes("support group")){
        return "Join our community forum to connect with other users, share experiences, and get support on your menstrual health journey. It's a safe space for open discussion and mutual support.";
    }
    else if (input.includes("articles") || input.includes("resources") || input.includes("education")){
        return "Explore our library of articles and resources on menstrual health, fertility awareness, and wellness tips. We're constantly updating our content to provide you with the latest information and insights.";
    }
    else{
        return "I'm sorry, I didn't quite catch that. If you need assistance with tracking your menstrual health, feel free to ask me anything related to menstrual cycle tracking, symptom monitoring, or fertility prediction.";
    }
}
