import React, { Component } from "react";
import "./CarouselComplex.scss";

export default class CarouselComplex extends Component {
  constructor() {
    super();
    this.state = {
      proyectSelected: this.props.dataJSON[0]
    };
  }

  proyectSelector=proyectSelected=>{
      this.setState({...this.state, proyectSelected})
  }

  render() {
    return (
      <div className="carouselcomplex-general-container">
        <div className="carouselcomplex-container">
          <div className="text">
            <div className="title">
              <h2>{this.props.title}</h2>
            </div>
            <div className="text-proyect">
              <h3>{this.props.name}</h3>
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="thumbnails-carousel-container">
            {this.props.dataJSON((element, i) => {
              return (
                <div onClick={()=>this.proyectSelector(element)} className="thumbnail-image" key={i}>
                  <img src={element.thumbnailImage} alt={element.name} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="carouselcomplex-image-container">
          {/* <div className="image">
            <img src="" alt="" />
          </div>
          <div className="navigation-controller">
            <div className="button-container">
              <img src="./images/arrow-left" alt="arrow-left" />
            </div>
            <div className="button-container">
              <img src="./images/arrow-right" alt="arrow-rigth" />
            </div>
          </div>
          <div className="points-controller">
            {this.props.dataJSON.map((element, i) => {
              return <div className="point" />;
            })}
          </div> */}
        </div>
      </div>
    );
  }
}
