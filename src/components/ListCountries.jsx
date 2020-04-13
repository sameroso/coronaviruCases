import React from 'react';
import {fetchCountries} from '../actions';
import {connect} from 'react-redux';
import './ListCountries.css';
import Cases from './Cases'

class ListCountries extends React.Component{
    state={input : ''}
    componentDidMount() {
        this.props.fetchCountries();
    }

    renderGlobalCases = () => {
        if(!this.props.data.Global) {
            return null;
        }else{
            const {Global} = this.props.data
            return(
                <div>
                    <div className="row">
                        <h1 className="mx-auto title-text-style text-center">CORONAVIRUS CASES</h1>
                    </div>
                    <div className="row">
                        <h1 className="mx-auto title-text-style">Global Cases</h1>
                    </div>
                    <Cases 
                    newConfirmed ={Global.NewConfirmed}
                    newRecovered ={Global.NewRecovered}
                    newDeaths ={Global.NewDeaths}
                    totalConfirmed ={Global.TotalConfirmed} 
                    totalRecovered ={Global.TotalRecovered}
                    totalDeaths ={Global.TotalDeaths}  />
                </div>
            );
        }
    }
    
    renderOptions() {
        if(!this.props.data.Countries){
            return null;
        }else{
            return this.props.data.Countries.map(country => {
                return(
                    <option>{country.Country}</option>
                );
            }
            )}   
    }
    renderCountryCase(){
        if(!this.props.data.Countries) {
            return null;
        }else{
            const index = this.props.data.Countries.findIndex(countryName => countryName.Country === this.state.input);
            if(index !== -1){
                const { Countries, Global } = this.props.data
                return(
                    <div>
                        <div className="row">
                            <h1 className="mx-auto title-text-style">{this.props.data.Countries[index].Country}</h1>
                        </div>
                         <Cases 
                        newConfirmed ={Countries[index].NewConfirmed}
                        newRecovered ={Countries[index].NewRecovered}
                        newDeaths ={Countries[index].NewDeaths}
                        totalConfirmed ={Countries[index].TotalConfirmed} 
                        totalRecovered ={Countries[index].TotalRecovered}
                        totalDeaths ={Countries[index].TotalDeaths} /> 
                    <div className="row">
                            <h1 className="mx-auto title-text-style text-center">Percentage of Global Cases</h1>
                        </div>
                    <Cases 
                        newConfirmed ={((parseFloat(Countries[index].NewConfirmed/Global.NewConfirmed))*100).toFixed(2)}
                        newRecovered ={((parseFloat(Countries[index].NewRecovered/Global.NewRecovered))*100).toFixed(2)}
                        newDeaths ={((parseFloat(Countries[index].NewDeaths/Global.NewDeaths))*100).toFixed(2)}
                        totalConfirmed ={((parseFloat(Countries[index].TotalConfirmed/Global.TotalConfirmed))*100).toFixed(2)} 
                        totalRecovered ={((parseFloat(Countries[index].TotalRecovered/Global.TotalRecovered))*100).toFixed(2)}
                        totalDeaths ={((parseFloat(Countries[index].TotalDeaths/Global.TotalDeaths))*100).toFixed(2)}  /> 

                    </div>
                    
                );
            }else{
                return null;
            }
        }
    }     
    onSubmit = (e) => {
        e.preventDefault();
        this.renderCountryCase();
    }
    render() {
        return(
            <div>
                <div>{this.renderGlobalCases()}</div>
                <form className="pt-3" onSubmit={(e) =>this.onSubmit(e)}>
                    <div style={{display:'flex'}}>
                        <input value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} id="input" 
                        className="input-config" list='countries' placeholder="Insert A Country"/>
                        <div>
                            <datalist id="countries">{this.renderOptions()}</datalist>
                        </div>
                    </div>
                    {this.renderCountryCase()}
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return state;
}
export default connect(mapStateToProps, {fetchCountries})(ListCountries);