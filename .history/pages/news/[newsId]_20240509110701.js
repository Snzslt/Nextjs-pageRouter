import {useRouter} from 'next/router';
//our-domain.com/news/somthing-important
function DetailPage(){

    const router = useRouter();

    const newsId = router.query.newsId;

    //using this method we can send a ewquest to the backend API
    //to Fetch the news item with newID

    return <h1>The Detail Page </h1>
}
export default DetailPage;