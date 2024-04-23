export default defineEventHandler(async (event: any): Promise<any> => {
    return new Response(JSON.stringify({ success: true, message: 'We made it' }), { status: 200 });
});
