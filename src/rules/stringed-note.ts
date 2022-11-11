
// TODO: implement
/**
 * This generates the xml information for a note
 */
export type GuitarNoteState = {
}

export default {
    meta: {
        name: "stringed-note",
        dependencies: {
            rules: ["stringed-pitch"],
            sources: []
        },
    },
    initialState: () => ({
        naming: new Map(),
        numberingRel2Abs: new Map()
    }),
    createVisitors: function(context:any) {
        return {
            "Fret": function() {
                context.setState(() => {
                    
                })
            }
        }
    }
}