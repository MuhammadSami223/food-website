import  sanityClient  from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url' 
export const client=sanityClient ({
projectId:'tis4rcmc',
useCdn:true,
dataset:'production',
apiVersion:"2023-12-14",
token:"skoRVqWE6LoBhWFqkC2k8hsX01FNRRVw5WlOjWFPJ05TjotllYgTuT5QdeMAOL5ZRHCQImXyeLnq5wGiRWa5vZiGzt7tOQGyoDxp0PgUWSKSj5MGpW9lVvZmPhWBITGQMl8oibuBYIrWb8BJ7W7NECufJUgArKjYfOVOJmMBr1xY3ZuBrHQa"

})

const builder = ImageUrlBuilder(client)
export const urlFor = (source)=>builder.image(source)