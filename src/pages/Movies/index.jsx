import { Rating } from 'react-simple-star-rating';

import { Header } from '../../components/Header';
import { Star } from '../../components/Star';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

import {
    Container,
    Card,
    Content,
    Register
} from './styles';

export function Movies(){
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <div>
                        <h1>Meus filmes</h1>
                        <Register to="register">+ Adicionar filme</Register>
                    </div>
                    
                    <Card>
                        <span className='title'>Interestellar</span>
                        
                        <Star rate={2} size={25}/>
                        
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non, labore nam modi voluptates in dolore explicabo nesciunt expedita iure velit culpa voluptatum saepe! Corrupti alias nisi molestias assumenda consectetur.</p>
                        
                        <Tag title='Ficção Cientifíca'/>
                        <Tag title='Drama'/>
                        <Tag title='Família'/>
                    </Card>

                    <Card>
                        <span className='title'>Interestellar</span>
                        <Rating 
                        initialValue={2}
                        allowFraction={true} 
                        size={ 25 }
                        fillColor={ "#FF859B" } 
                        SVGstrokeColor={ "#FF859B" }
                        SVGstorkeWidth={2}
                        emptyColor={ 'transparent' }
                        readonly={true}
                        SVGclassName={'star'}
                        />
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non, labore nam modi voluptates in dolore explicabo nesciunt expedita iure velit culpa voluptatum saepe! Corrupti alias nisi molestias assumenda consectetur.</p>
                        <Tag title='Ficção Cientifíca'/>
                        <Tag title='Drama'/>
                        <Tag title='Família'/>
                    </Card>

                    <Card>
                        <span className='title'>Interestellar</span>
                        <Rating 
                        initialValue={2}
                        allowFraction={true} 
                        size={ 25 }
                        fillColor={ "#FF859B" } 
                        SVGstrokeColor={ "#FF859B" }
                        SVGstorkeWidth={2}
                        emptyColor={ 'transparent' }
                        readonly={true}
                        SVGclassName={'star'}
                        />
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non, labore nam modi voluptates in dolore explicabo nesciunt expedita iure velit culpa voluptatum saepe! Corrupti alias nisi molestias assumenda consectetur.</p>
                        <Tag title='Ficção Cientifíca'/>
                        <Tag title='Drama'/>
                        <Tag title='Família'/>
                    </Card>
                </Content>
            </main>
        </Container>
    );
}