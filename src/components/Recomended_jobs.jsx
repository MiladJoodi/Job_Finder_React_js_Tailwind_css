import React from 'react'
import Categories from './Categories'

function Recomended_jobs() {
    return (
        <div>
            <div>

                <div>
                    <h2>Recomended jobs</h2>
                    <span>
                        <button>Latest Job</button>
                        <button>Premium Job</button>
                    </span>
                </div>

                <p>Explore suggested job searches</p>

                <div>
                    <div>
                        <div>
                            <h2>Job Categories</h2>
                        </div>
                        <div>
                            <Categories image="/bus_icon.png" opening={3} title="Automotive" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recomended_jobs