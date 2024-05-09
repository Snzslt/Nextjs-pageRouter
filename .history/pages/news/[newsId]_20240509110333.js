import {useRouter} from 'next/router';
//our-domain.com/news/somthing-important
function DetailPage(){
    const router = useRouter()
    return <h1>The Detail Page</h1>
}
export default DetailPage;