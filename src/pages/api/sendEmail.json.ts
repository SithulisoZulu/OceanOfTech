import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend("re_G6xHnmVZ_DmEQmqwwVndm34BGxswexrwh")

// Outputs: /builtwith.json
export const  GET: APIRoute = async ({params, request}) => {

    const send =  await resend.emails.send({
        from: "okasithuli@outlook.com",
        to: "sithulisomodlizulu@gmail.com",
        subject: "TestEmail",
        html: "<p>Hi</p>",
        text: "Hi"
    })
    
    if(send.data)
    {
        return new Response(
            JSON.stringify({
                message: send.data
            }),
            {
                status: 200,
                statusText: "OK"
            }
        )
    }else {
        return new Response(
            JSON.stringify({
                message: send.data
            }),
            {
                status: 500,
                statusText: "Internal Server Error"
            }
        )
    }
}