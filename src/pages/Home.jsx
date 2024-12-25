import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard, Button } from '../components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const [posts, setPosts] = useState([]);
  const { status } = useSelector((state) => state.auth); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (status) {
      appwriteService.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
  }, [status]);

  if (!status) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-indigo-800 to-black p-3">
        <Container>
          <div className="w-full bg-white/30 backdrop-blur-lg p-8 rounded-xl shadow-lg text-white">
            <h1 className="text-4xl py-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 mb-4">
                  Welcome to Skroller
                </h1>
            <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAMEBQcBAv/EAEoQAAEDAgMEBwMHCAcJAQAAAAEAAgMEEQUSIQYTMVEUIkFhcYGhMpGxBxUjQnLR4RZDUlNigsHwJDM0Y5KTsiU1RFRVc3Siwhf/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAgEQEBAAIDAAMAAwAAAAAAAAAAAQIRAyExBBJBEyJh/9oADAMBAAIRAxEAPwAxjFglLMyIXkcG+JXphGdjb2LnAC6sX00WUt3bSLdoupu1T/Q+/FoCS1rxcdhTRrY39qH9tIWYTikL6bq73rAX7OS8UdY2Udl1OOVvqssNeCQTtPBPRS6qljk7QVKEkrIJnw23ojcY8wuMwHJWzXsUlxoVIbeyABjEr8LZVw1kjpJWloADQGkjjw7Ch38qMYiqi1+IzuiDiDaFoPwRs9NmjYXcR71IAsLLGcS2jx2kdA6PHHTRTMDgWxs0530UOTa/HWu6uLvLee7bp6IDcJZBGLu9ygzTuk1PBY1+VeOvsTibiTw+jZr6JDaXGnH/AHm/suQyPT0QTXnOXglZINoccc0EYi65tYGOPX0XHbQYwHZjiLw2wuQ2PU2BI4eKA1q64SsiOP4xlH+0X5tSReIWAAPLxTMu0OLh124m/LwB6p+DUBsd15uskosYxWoZPnxSTMzKWgW4G4P1fsr1UYviccZy4hUFx0AuNfRAaxmXklRMMZNFhtKypkdJNum7xzuJNtVJFyQALkoDoJuptLTGbU6N5r1S0X15r9zVYMsBYaJg10SNkbmwtDM3Gw4ry9jGjLky3tbXTQ3UziEzUGNrSJDoRoEAt7+16JKJ1f1sqSrQSYmwvAtGzQi1x2qHjG0NJhE8VPUxVDpZmkxiJgcDYgWuSNdQo+BVoq2Z8wyHg6+hXjEKVlbitPVOZmbS6Rg8DrqVB7Qsc2NG0FT0vEK2aGXLaOGK2WMd57SgOqoqzZ3HPm6pk3rHDNFIe0fyFtN2vbnaeqdUA7WQxYnjkM5kG6pWZAAdXEm5PhwCWj2Zw1slQAGsJ70S0GHZLGR13aGwVTQythja2JrQO4q2hqHEIJmldH814rXYZlOSKoc+P7DtR8VQZTNvcwqdASNeOo7u/wBEabeUcvzxT4hFTyyRyQ7uVzG3sWnS/lp5Iae2CFuZ+Gz8bXdEePigbQp4iPpWwTdfNdvHL6Jp1O5r3x7ubq5jw42F1ImxvDKeofG/Dev9ZpsOOq9flNgwbY4NGfFwHHyTJFcx4u8snbqQG5ToQB968vbkzR53gi5JMfHQd6lP2owlzi75ljGbid9x9F5/KTDLZThRA5ioP89iAYdI0XeCbahtoxpZeuIMYJDoy4m0IsbHxXuTaHCn3Pza8OPZv00Mew4mxwy4v2zfggtw48vBLgyoAeSAQy2XX7l4cJCSHMmtGHWufbId9xTrdpsLJJODRknQ3kBv6KRQ4vRYjMYKfBA9waXWjAebaAmwHeg9mMKiEtVIxzJmgxuIDuAPtfwVhhNH0zaKjpvaii+mlPcPxt70/wBEm3zKiLB6hmhzO3JuLi2nldXeyVAaaaoqapm7mmIaGOPWY3v5FL9MWQMfPJljGvwVxS0rIRe13812jjaynaGty8+9SAEw4V5klZF7brdygYjinRpBDDGHSfWJNg37yh7EcRhDrVlY7eO+q27j7hwU3KRrhxZZeCaTEdbNHVTE0m9HtWJ4OCDJsajpCdxTVkl+dtR4X+5W1Bi0U9MKhhLYfrB2hYe9VjlKvLgyxm6uMsn6Y9yShdLi5j3pK2WotaWhgpmZYYw0dwVVtXtBR7N0G/qPpJpNIYAdXn+AHNEQjJWB/KBij8X2tq7OvDA/o8IAvoDY2/eupjK03i22WN4rI4vq3U8TvzVPdjQPifMqsixGtjdmFXPf9p5d8Ua4R8mFdVUrZq6qjoQ4XbCWF8lv2tQGnu18lS7V7DYns/D0reR1dEDZ08QLSw9mZp1HjqPBPcLVO4HtPI+dsFS4BzjZrxoD+K0DDK8mwLtLLDr2110WmbKVbqzDo5Hm8gGVx7wpy6VjdjOtqBGYi25vftVG7amhdIyJ9LWklwtamcQNbcb6Kc9kkwitwadVmZe2I18cuNMG8YWNsKg5TvWO1+j5NI7ePJE7FHUuIYJLLM6XBp5HtJzPNESXWNtCeKeGJYA2O7NnpjbNcChBPVtf4/FA1QA21P8AOsZdRtlEuk1haXsOTW17aKPPNCXVlQ7EwI6kTNYd3Le+ZjterfT+KZNDkxHBmPlaNnZzu8+ooBY5eWnb2Jl+KYSxmf8AJypOrhYUAv1QCez9r0PJAdRTwPiko/nFgkpnTuf9FJZvOxy2Nu7ySrHUMktTV9O6tQJoxeB9x1G8dL6X9UDY6qMUw1r3xs2dn6uYl3QBY5Rm0PDuUf51ocmduzlSesRl6CL6AG9vO3igmajpC2SjfVta6N0kptTuyj6PXW1idLp1seGumNf0txa4OhNqZxdfcgcOXb5oA8OMULX5XbM1Ojbl4o22vlLv4W8Uo8cow3eRbOVsb82W3RWh1i3Nfw7PFAUuHUWToDavK/PvP7O7L/VE8fDVe448ObUx4gawlgDIcvRje4gA56C2voloNAp8f6RXQUbcLro2yNH0m7AZHdubXXs4Fea2VzsQidwJY25H2igfZehw6kx/Dj0lz587XgiHKCHRkgcUaTuEldEWagNH+opXpUHlNM1lMzMdbLzLVOPDRRaOJ8sbXE9ROVDYom3JPcEwoMWkeJZmtPWdazuV7ISeXYfCHuBNU8/WNw3+b8EYYpo5sw4AWNuy2oKE9oXCWaCZpBbJFn05k3Pnf4Lnzmq9X4lmesVNNUTSOzPkebG/tG3uRHs9Maimc6dji1zwxzmi7i7s4cdPNDDxzRVsFM+GdzQ76OSVmh4aakowvbq+ZhjOPpefN9T+rq/8sfckifpVN+m33fgkujbw90/JKIonyOuQxpcQ0a6DsWL7HYWZflHLcRYA+Eyz7sge0LZb9/WB8ltgYso20iqNkduqbH4GOkoah3WY3h7OV7fd1gmzrTX8E1JBFWRvpahofDOwxSNIuC06EJvDMRo8XpG1eHztmhcL3adW9xHYe4qu2r2jotmsOlklljdiDmHo1NcZnO7HHk0c1Ct9MEraTo9TLBmBEcjmX5gOIRv8n8Rbh7y7gZSB6IMjbNW1TWRtdJPM+wDeLnEraNmNl30FFDDM5t2tBdbtd2qsvNJwne0t8bIKB0rzYnKGt/SJNrLM6DB6XEp6iSakmgo2PcH1BmOp10aLarUMZjEmJUFFHyc+3KwtdUOM0ElfO3DKKQ09JEQJJA0aHkOwuPPzWX2146Zxy6tDdS521ONSUtHQRMggp3byQSFjImE3J0GpJb7/ADQzVthpQ+nqYWSPaQczKl1jn43Nv2QjjaMwbOYK2ipWsNRIAZH5g3MeFtTw/HmgeN9X02EGaMXDM7RLHx7bi6vC2suTGYnWVdHJXwZqW/TgA8dIdoZXkOyjyUSOoo56F+alaN24OH9Kd9ezSCfBoUiGrrxBM11cA/NHk/pEYIAJvbXTSyfjqazfUZOItAaI95/S25bh13XF9dFbF4bWUj6ykc+kaelts8dJdaznuiOUc7BdZVUQpKqLokWWA5wRUvuCXNjObuspMc9W2mq74v13FuQCvA03lzlN+r1f4pwvxOV2HsgxRxdL1QOnEl53ncddNEGhjEqY1NFP0KIPnZY/TPPFzotP3QvMldTNbXU7cOjDacl7fpH3uHtjF/3XKe2SsdXVMUuMkCY3jaK12bKZM2munUv8FJ2qZWPq2S0GIPioiC5r+lvDXh1raj+dUrYf1tlqs2cq21W0GHt6E0PzNY0gusA1hAPHkjyOEslYHcS0H/2KCtm3VcOPUXSMYMhz5hCKlzw9paeNz6WR2x2dzXcgPiUsjxEOIYm3CNn5K1zQ8wxFwZzKyWo+UPHZpC61K0E/qibeqOtqZidm6xpOjad1ljUQa7V97JxOQlqtr8blgfG+eEse0ggQ2096s8I6TiWE01oXvcLhhaL2PAg93agx5HssPV5LRvk662GQafnnhLLGVtw82XHenY9mZZpzFK6Zrm6vibFdwHiCQrSGkbhMgL6SaFgGWPMNO8k8yjjD6cUtK79OaV0j3c9dPSyeq6aOrp3wTDMyRtiSpmEjTk+Tyck1QZ85Rcz70lTdAqv+bj94ST2n+NqijYph1Ji1DLRYhC2Wnk4tOljzHI96krqpiyHFvkrxOjqXT7PVzXsPAOkMUgH2hofRVVN8mW0s0307KeDMetJJOHX79L6rc7JJloIbJbC0Wzx6Q9/Sa4i29cLNZzyjs8fgiwMDQSnFx/sqacipqaVgnlq2j+kbssa8/UaeKjYZGxsli07uJufMeL3HtPfxKtjaxB7eKqcYqOi0D3xaW0tzWFjqxu+mVbURR43tBO10pYyJj3N14O4j4eqiwbMmWobU9KtqHZcn4r1T07qt9TVG+UykNv29iIaOF5LY47k24LTGo5cZew9FsSZH26aBc/q/xVnTfJxvW3OIFo/7X4ouggpMNiElbNGHcr8FGftOKmQw4JST1snAGJvV/wAXAe9abrn1FXSfJjSPlaKrFJWx/wB3G0EnxN7e5Ta7Y6HAt1WUETpTSMcY5JZSbXBubWt23VlTbP7R4mS/Eq2PDoTwjg68lu8kWB8ir11PHT1Aw+SWWWCWEMO9kLjcWF7ntN1lyXUdHDjLWTzVQqI44X0kEDmabyJliTa2vkvUcccuCxYM+Uv3YIL7cGuNwPK4UnaPCpcMxB8RHUubcnDsUelOUtcWnTS6mWtbJ6eodnIIK+nqxUzOdDls02sbNy8kSUgDcwHAWUFhyhTaE3D/ACWm9uTWje1Dr4DWN/uXfBZEw5dSNFrO0ZLsIqW843D0WTMIOp5K8UZvWYH6tlqfyYMD8FY7tFQ/4rLHPutU+Sp4+ZgO0VD074nH1pTXyNAaGXb8EPbV45VUMbKGgpZRU1jxDFUPb9G0u7bg6nuRJM/qMA0BF1Hqo2TQFsrc4BDhfmDcFDQCf/mL/wDrdR/lj71xHXSvFJI/vU9dskEroJ1cuuLqA6FGlqG5iy/uKfkdkb39iop5C2pNuCzzy0048dpkswDTZDe0bpKukdTxHrE6G+iYxnHNxPuWC5trZN4Xg+I7SMdv6oUVKTZ26BdK8fa0sPBZyXK9N7ZhOwjVVNDhL46UzAiPQRxjM4u8OasaKm2jxEB2HUPQYNRvqk2NuYGp+C0fBdkMFwVo6FSNzAayPsXHzVlURDIWts0dwW8x05csvtdszoNnaODFaL5/ldiTKl7onb7RrJbAtsL+yQDp3LToaSnpGCOlhZFGNAGtsgjamle+iqTCDvYfp4vtM1+GYeaMcLrG4hhlLWN/PRBx8e1USQqDHGhlXTuebNfPFGD4vB/gr1x1VDtLSx18lFRyF4bI9zy5hsWlouCPA2WPNP6tuC6yQNvhAMPLnR5pMwynkgfBoxUzSMeeoYy3wJ4FWW10mJQwiGrmZOwfXDLOI71TYLUbqe36ajH1rnL9dLSncXQsLtHWs4ciOPrdWOHnqv8AFVz7RVUzBweRK0faGvqCp+HghjyRxK1cxrHjfDpvsO+CyRvAeC1/Ead1RSyRsNi4EX5XCztuyeOPkLWURdrxD22PqrxZ5xSrTvktfbDXf+SfgEKx7C7Qv/4SIfamC0TYfZyowSgy17mb97y8sZqG9nFOljNUbGRttfJNTS5hlb70zmNly6SnmyS9XSQFwkkkgyXR3pBN1EmRmUcSlbo5NmKuXU8kMYzWtpoXyF2tlcV9QI2m5t3rOdpMREs5DnHcxaut2rnyu7p18eOps3Th9TOZX3Lnlaps1TCnoo2ga5dVn+D0+eohaQLX1WnYe3JEB3LfCajm5Mt1KKZlFwn7XTcgVsw7isZa4SAAkc+BTGwrtxQVeFFxPQJy2O/HdO6zL+qtMSjDo9UOYfUdA2tprm0dfEad1/1jes33i4/dSMXvOqrH2k2gp2ngylkd4Xc0K0eBc6Krpjnx+rJ/N00bR5ucf/lTn+ReH6qtrKATYdKAwF9jYrL4y6GW59ppW24kwPgcLC5Cx/H6bomISC1gTeywvWTqwv2wWb3tk6HUj6pLH+DtfiPVWzDZot2obw17qijmpWkby2aO/wCkNW+oV7RzienjlbwcLi/FbRy5TVShxupdJoRayhtKk0x6ycKreNPtKjwnRPtKpBy64SuLiA7dJcSQF4upWS4oMiQ1pcdLKBNIbF7+PYpFU7g0eaqMUqRFEbnsWfJW3HiHdqMT3MRANidAhGngM4Jk1udU9jdWamsy3uAVLw+HqLLCdtuS6mlpsZd8rI3e1ASw+VrellpNJwWc7N2gx8A6NnZYfab+F/ctFpjYLpjjvqV2JuRe76Jt6ZIdU3M0koK2sjkipemQg76ilZVMtx6hubeV0czC4KH8WjBa4ngQQUBeQzsqqeOphN4pWB7SORF1XUAPzliUhBF5GtBI4gNH8Sq3YOoy4TPhch6+HVDoW347snMz0NvJX0j7dpSs3YqZalOSjOy3cs72xocwc9vtNKPhJZC+0/WjkFtSsOaarp4O5pndBUdHqWPHC9j3Ikw5+V08HZHJdv2XdYfEjyQtOCyZwKvMJlMpil7REY5O+xu34lVjUckX7TdPwGxUVh0T0Z1VslzTOuFIaoFK5Tm8FSDiV15SKA7dJeUkARLhOUX5LqZqHWbbmlelSbqLNIG5nFB+0lblY6xRFilRkicOCzvH6wyPLLn3rnyu67MJqKuP6Spc7mUSUjMsYVBhkeaUX80RxaMCvGMuS9vQDo5oqiMXfA8SN8uI8xcea0WllbLCyRhGVzbjvQFTf1gRLs9NaldTX/s7i1p5tOrfcDbyW0c9EGdJztEw169F6ZPMjlU14zNdzVlIVX1WoOiAFsLm+bttIgTaHEqcxOvw3sfWaf8ADceQRdI4c7oF2tzU8MNZACaijmbUMDPaIaesPNt1dnHH1sMUtExrI5gHRuPWJB9EbGl2ZAOJAudLqkxxtwbqXBC42dKS941u7VRsV6zVjy9unhrOMXjyTk9hTmCTFszoyfa1AUrG6fie26p6OTdVMb72sdVGFXyQaxHQKQw6qFTOuwKYwrVzLClcrCN1wqeB9irOB9wqlTUoFcK5dcumRXSXLpIAmUap9opJKc2nH6FdoJHBpsexZ3XvLqnVJJc89df4n4SBlce26umcAupLXFz5+pNL/WBXGFOLcUDW6CSBxcO8Ftv9RSSWmLGiBpK9EpJKieXaqgxSsmbUiBhDWu4kDVJJAV8cLHt64vmvmvrdUmxJLKyvoQSYKSqlihB+q0HQLqSk4N4RwVfXjj4rqSjk8bcXoQxlosUKSaSGySSxxb5i2gJMLCf0QrBhSSW0clPMOqsKZxsuJKompoOiRSSVE4kkkgP/2Q==" // Replace with your smaller image
                  alt="Blog"
                  className="w-[300px] h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 text-left">
                
                <p className="text-lg mb-6">
                  Create, Edit, Read, and Store blogs all in one place with Skroller.
                  With our app, you can easily publish your thoughts, keep track of your writings, and share them with the world.
                </p>
              </div>
              
            </div>

            {/* Second Section: Easy access storage */}
            <div className="flex  flex-wrap items-center justify-between mt-12">
              <div className="w-full lg:w-1/2 text-left">
                <p className="text-lg mb-6">
                  Enjoy easy access, storage, and seamless maintenance of your blogs. Organize your ideas, edit with ease, and keep everything at your fingertips.
                </p>
              </div>
              <div className="w-full flex justify-end lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src="data:image/jpeg;base64,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" // Replace with your smaller image
                  alt="Easy Access"
                  className="w-[300px] h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl mb-4">Login to Read Blogs</h2>
              <Link to="/login">
                <Button className="text-lg bg-blue-600 hover:bg-blue-700 shadow-lg px-8 py-4 rounded-lg transition-all">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-indigo-800 to-black">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="text-4xl py-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
            Welcome to Our Blog!
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Discover, create, and share your thoughts. Explore the latest posts below!
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {posts.map((post) => (
            <div key={post.$id} className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <PostCard
                id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/create-blog">
            <Button className="text-lg bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg shadow-xl transition-all">
              Create New Blog
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
