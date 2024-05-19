import './main.css';

export function TermsOfService() {
    return (
        <div>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-20">Vio Terms of Service (TOS)</h1>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Introduction</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                I, Meaning, am the sole owner and operator of Vio ("Bot").
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Acceptance of Terms</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                By using Vio, you agree to the following Terms of Service.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">User Responsibilities</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                Users agree to utilize Vio in a manner consistent with applicable laws and regulations and in a way that does not disrupt the service for others. 
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Intellectual Property</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                The code, design, and associated assets of Vio are the intellectual property of Meaning. Users are granted the right to examine and analyze the bot's operation for non-commercial purposes.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Termination</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                Meaning reserves the right to terminate any user's access to Vio at any time, for any reason, without prior notice.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Disclaimers</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                We do not guarantee that Vio will be available at all times. <br/>
                We will not be responsible for any damages caused by the use of Vio.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Changes to Terms</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                Meaning reserves the right to modify these Terms of Service at any time. Updated versions will be communicated to users through appropriate channels.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Governing Law</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                These Terms of Service shall be governed by and construed in accordance with applicable laws.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Contact</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                If you have any questions, reports, or concerns, please reach out through the Vio Discord server: <a className='hover:text-blue-900' href="https://vi-o.tech/discord">https://vi-o.tech/discord</a> 
            </p>
        </div>
    )
}

export function PrivacyPolicy() {
    return (
        <div>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-20">Vio Privacy Policy</h1>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Information Collection</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                * Temporary Command Logging: Vio temporarily logs command usage data to the console for error monitoring and debugging purposes. This data is not linked to personally identifiable information and is not stored long-term.
                <br />
                * User IDs: Vio utilizes Discord User IDs as primary keys to manage user-specific permissions within the bot. 
                <br />
                * No External Sharing: Vio does not share Discord user data with any external third parties.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Data Usage</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                * Functionality: Command logging aids in identifying potential errors and guiding debugging efforts within Vio.
                <br />
                * Permissions Management: User IDs are essential for maintaining user-specific permissions and settings within the bot.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">User Choices</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                As command usage data is not stored, users cannot request the deletion of this information. Users may still request the deletion of their User ID from Vio's records, affecting their stored permissions. To initiate this process, please contact us through the Vio Discord server: <a className='hover:text-blue-900' href="https://vi-o.tech/discord">https://vi-o.tech/discord</a> 
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Security</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                Database Protection: Vio takes steps to secure its database, protecting stored user data. This includes implementing access controls to limit who can view or modify the data.
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-4xl">Contact</h2>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-5">
                If you have any questions, reports, or concerns, please reach out through the Vio Discord server: <a className='hover:text-blue-900' href="https://vi-o.tech/discord">https://vi-o.tech/discord</a> 
            </p>
        </div>
    )
}