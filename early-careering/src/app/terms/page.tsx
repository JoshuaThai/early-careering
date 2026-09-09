import{Footer, Header} from "../components/main";
import termsStyles from "./terms.module.css";



function TermsPart({title, content}: {title: string, content: string}) {
    return (
        <div className={termsStyles.termsPart}>
            <h2>{title}</h2>
            <br />
            <p>{content}</p>
            <br />
        </div>
    )
}

export default function TermsPage() {

    return (
        <div>
            <Header/>
            <main className={termsStyles.termsMain}>
                <div className={termsStyles.termsContent}>
                    <div className={termsStyles.termsContentContainer}>
                        <h1>Terms and Conditions</h1>
                        <p><b>Last Updated:</b> September 9, 2026</p>
                        <br />
                        <p>Welcome to EarlyCareering's Terms and Conditions page.</p>
                        <br />
                        <p>By accessing or using this website or application, you agree to these Terms and Conditions. 
                            If you do not agree with these terms, please do not use the service.</p>
                        <br />
                        <div>
                            <TermsPart title="1. Use of the Service" content="You may use the service only for lawful purposes. You agree not to 
                                misuse the service, interfere with its operation, attempt to gain 
                                unauthorized access, or use it in a way that could harm other users." />
                            <TermsPart title="2. Accounts" content="If you create an account, you are responsible for keeping your login 
                                information secure and for activity that occurs through your account. 
                                You agree to provide accurate information and keep it reasonably up to date." />
                            <TermsPart title="3. User Content" content="You are responsible for any information or content you submit through 
                                the service. You must not submit content that is unlawful, harmful,
                                fraudulent, or that violates the rights of others." />
                            <TermsPart title="4. Intellectual Property" content="Unless otherwise 
                            stated, the service and its original content, features, design, and 
                            functionality are owned by us and may not be copied, distributed, or 
                            reused without permission." />
                            <TermsPart title="5. Availability and Changes" content="We may modify, 
                            suspend, or discontinue any part of the service at any time. We do not
                             guarantee that the service will always be available, uninterrupted, 
                             or error-free." />
                            <TermsPart 
                            title="6. Disclaimer" 
                            content={`The service is provided on an "as is" and "as available" 
                                basis. To the extent permitted by law, we make no guarantees 
                                regarding the accuracy, reliability, or suitability of the service 
                                for any particular purpose.`} 
                            />
                            <TermsPart title="7. Limitation of Liability"
                            content= "To the extent permitted by law, we will not be liable for indirect, incidental, special, or consequential damages resulting from your use of or inability to use the service." 
                            />
                            <TermsPart title="8. Termination" 
                            content="We may suspend or terminate access to the service if 
                            these Terms and Conditions are violated or if necessary to protect 
                            the service or its users." />
                            <TermsPart title="9. Changes to These Terms"
                            content="We may update these Terms and Conditions from time to time. 
                            Continued use of the service after changes are posted means you accept 
                            the updated terms." />
                            <TermsPart title="10. Contact" content="If you have questions about 
                            these Terms and Conditions, please contact us through the contact 
                            information provided on the website or application." />
                        </div>
                    </div>
                </div>
            </main>
            <br />
            <Footer/>
        </div>
    )
};