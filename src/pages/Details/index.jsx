import {FiClock} from 'react-icons/fi'
import { Rating } from 'react-simple-star-rating';

import { Header } from '../../components/Header';
import { Star } from '../../components/Star';
import { Tag } from '../../components/Tag';
import { Return } from '../../components/Return';


import {
  Container,
  Movie,
  Content
} from './styles'

export function Details() {
  return (
      <Container>
        <Header />
        
        <main>
          <Content>
            
            <Return />
            
            <Movie>
            <div className="title">
              <span>Interestellar</span>
              <Star rate={5} size={30} />
            </div>

            <div className='infos'>
              <div className="user">
                <img src="http://github.com/tamurafelipe.png" alt="Foto Usuário" />
                <span>Por Felipe Diego Tamura</span>
              </div>
              <div className="time">
                <FiClock />
                <span>23/05/22 às 08:00</span>
              </div>
            </div>

            <div className='tags'>
              <Tag title='Ficção Cientifíca' />
              <Tag title='Drama' />
              <Tag title='Família' />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi ut suscipit illo placeat unde ex vel laboriosam quas id, fugit necessitatibus est asperiores eaque veritatis repudiandae possimus ipsa modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae asperiores facilis quae provident excepturi officiis quos voluptatum maiores iste? Perferendis, asperiores optio. Repellat dignissimos facere optio libero repellendus mollitia illum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corporis eius deleniti explicabo eos blanditiis natus unde temporibus magnam asperiores nostrum, quia, inventore dicta dolor, laudantium sint magni optio nihil.</p>
             
            </Movie>            
            <Movie>
            <div className="title">
              <span>Fast And Furious</span>
              <Rating 
              initialValue={2}
              allowFraction={true} 
              size={ 30 }
              fillColor={ "#FF859B" } 
              SVGstrokeColor={ "#FF859B" }
              SVGstorkeWidth={2}
              emptyColor={ 'transparent' }
              readonly={true}
              SVGclassName={'star'}
              />
            </div>

            <div className='infos'>
              <div className="user">
                <img src="http://github.com/tamurafelipe.png" alt="Foto Usuário" />
                <span>Por Felipe Diego Tamura</span>
              </div>
              <div className="time">
                <FiClock />
                <span>23/05/22 às 08:00</span>
              </div>
            </div>

            <div className='tags'>
              <Tag title='Ficção Cientifíca' />
              <Tag title='Drama' />
              <Tag title='Família' />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi ut suscipit illo placeat unde ex vel laboriosam quas id, fugit necessitatibus est asperiores eaque veritatis repudiandae possimus ipsa modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae asperiores facilis quae provident excepturi officiis quos voluptatum maiores iste? Perferendis, asperiores optio. Repellat dignissimos facere optio libero repellendus mollitia illum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corporis eius deleniti explicabo eos blanditiis natus unde temporibus magnam asperiores nostrum, quia, inventore dicta dolor, laudantium sint magni optio nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sapiente suscipit ea aut, quia magnam inventore harum, voluptate velit molestiae quas deleniti modi provident deserunt accusantium, natus nemo ex rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta nihil velit numquam porro quas quia odit, commodi unde voluptatem enim adipisci laboriosam veniam, pariatur magnam blanditiis facilis illo laborum?</p>  
            </Movie>
            <Movie>
            <div className="title">
              <span>Titanic</span>
              <Rating 
              initialValue={4.5}
              allowFraction={true} 
              size={ 30 }
              fillColor={ "#FF859B" } 
              SVGstrokeColor={ "#FF859B" }
              SVGstorkeWidth={2}
              emptyColor={ 'transparent' }
              readonly={true}
              SVGclassName={'star'}
              />
            </div>

            <div className='infos'>
              <div className="user">
                <img src="http://github.com/tamurafelipe.png" alt="Foto Usuário" />
                <span>Por Felipe Diego Tamura</span>
              </div>
              <div className="time">
                <FiClock />
                <span>23/05/22 às 08:00</span>
              </div>
            </div>

            <div className='tags'>
              <Tag title='Ficção Cientifíca' />
              <Tag title='Drama' />
              <Tag title='Família' />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi ut suscipit illo placeat unde ex vel laboriosam quas id, fugit necessitatibus est asperiores eaque veritatis repudiandae possimus ipsa modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae asperiores facilis quae provident excepturi officiis quos voluptatum maiores iste? Perferendis, asperiores optio. Repellat dignissimos facere optio libero repellendus mollitia illum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corporis eius deleniti explicabo eos blanditiis natus unde temporibus magnam asperiores nostrum, quia, inventore dicta dolor, laudantium sint magni optio nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sapiente suscipit ea aut, quia magnam inventore harum, voluptate velit molestiae quas deleniti modi provident deserunt accusantium, natus nemo ex rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta nihil velit numquam porro quas quia odit, commodi unde voluptatem enim adipisci laboriosam veniam, pariatur magnam blanditiis facilis illo laborum?</p>  
            </Movie>

          </Content>
        </main>
      </Container>
  )
}
