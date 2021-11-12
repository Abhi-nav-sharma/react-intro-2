import React from "react";
import ListHeader from "./LIstHeader";
import ListItems from "./ListItems";
import styles from "./List.module.css"
function List(){
    return(
        <>
        <ListHeader title="Shop by category"/>
        <div className={styles.items}>
            <ListItems/>
        </div>
        
        </>
    )
}
export default List