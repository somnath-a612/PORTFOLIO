import { Home } from "@/assets/DataType"
import { navItems } from "@/assets/DataType"


function Buttom() {
  return (
    <div  className="pt-4   px-6 md:px-24 bg-gray-300">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <h2 className="font-serif font-bold">Somnath Sing</h2>
            <p>Frontend Developer crafting modern web experiences<br /> with cutting-edge technologies.</p>
            <div className="flex gap-4 items-center  py-3    pb-4">
              
                 {
                    Home.map((items, index) => (
                    <a href={items.url}>
                        <img key = {index}
                     src={items.img} alt= {items.name} className="size-6 hover:scale-110 hover:shadow-xl duration-300 delay-0"/>
                    </a>
                     ))  
                      }
              </div>
          </div>
          <div>
            <h5 className="items-center uppercase font-bold">quick navigation</h5>
             <ul className="flex flex-col gap-3 py-2 ">
              
                        {navItems.map((items, index) => (
                            <a
                                key={index}
                                href={items.href}
                                className="text-muted-foreground duration-300 delay-0 hover:scale-105"
                            >
                                {items.title}
                            </a>
                        ))}
                    </ul>
          </div>
        </div>

        
    </div>
  )
}

export default Buttom