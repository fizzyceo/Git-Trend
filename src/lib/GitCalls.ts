import { format, parseISO } from 'date-fns';
interface RepoProps{
    id:number,
    name:string,
     html_url:string,
     forks_count:number,
    language:string,
     watchers:string,
     description:string,
     topics:string[],
    owner:{
        html_url:string
    }    
    ,contributors_count:number,
    contributors_url:string
    
}
export async function getGitTrendsStars(fromDate: string,min_stars:number,num_repositories:number) {
  try {
    const parsedDate = parseISO(fromDate);
    const formattedDate = format(parsedDate, 'yyyy-MM-dd');
    const searchParams = new URLSearchParams({
        q: `stars:>${min_stars} created:>${formattedDate}`,
        sort: "stars",
        order: "desc",
        per_page: num_repositories.toString(),
      });
  
      const url = `https://api.github.com/search/repositories?${searchParams.toString()}`;
  
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Accept: "application/vnd.github.v3+json",
        },
      });
  
   
    // const url = `https://api.github.com/search/repositories?q=stars:>${min_stars} created:>${fromDate}&sort=stars&order=desc`;
                

    // const response = await fetch(url, {
    //   headers: {
    //     'X-GitHub-Api-Version': '2022-11-28',
    //     Accept: 'application/vnd.github.v3+json',
    //   },
    // });

    const data = await response.json();
    // id,name, html_url,forks_count,language, watchers,description,topics,owner->html_url,contributors_count,

    const git_response = data.items.map((repo: RepoProps) =>({
        
      
        
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          forks_count: repo.forks_count,
          language: repo.language,
          views: repo.watchers,
          topics: repo.topics,
          owner: repo.owner.html_url,
    })      )
      
    console.log(git_response[0]);
    return git_response;
  } catch (error) {
    console.error(error);
  }
}
export async function getGitTrendsForks(fromDate: string,min_forks:number,num_repositories:number){
    try {
        const parsedDate = parseISO(fromDate);
        const formattedDate = format(parsedDate, 'yyyy-MM-dd');
        const searchParams = new URLSearchParams({
            q: `forks:>${min_forks} created:>${formattedDate}`,
            sort: "forks",
            order: "desc",
            per_page: num_repositories.toString(),
          });
      
          const url = `https://api.github.com/search/repositories?${searchParams.toString()}`;
      
          const response = await fetch(url, {
            method: "GET",
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
              Accept: "application/vnd.github.v3+json",
            },
          });
      
       
        // const url = `https://api.github.com/search/repositories?q=stars:>${min_stars} created:>${fromDate}&sort=stars&order=desc`;
                    
    
        // const response = await fetch(url, {
        //   headers: {
        //     'X-GitHub-Api-Version': '2022-11-28',
        //     Accept: 'application/vnd.github.v3+json',
        //   },
        // });
    
        const data = await response.json();
        // id,name, html_url,forks_count,language, watchers,description,topics,owner->html_url,contributors_count,
    
        const git_response = data.items.map((repo: RepoProps) =>({
            
          
            
              id: repo.id,
              name: repo.name,
              url: repo.html_url,
              forks_count: repo.forks_count,
              language: repo.language,
              views: repo.watchers,
              topics: repo.topics,
              owner: repo.owner.html_url,
        })      )
          
        console.log(git_response[0]);
        return git_response;
      } catch (error) {
        console.error(error);
      } 
}

export async function getGitTrendsContributors(fromDate: string, num_repositories: number): Promise<RepoProps[]> {
    try {
      const searchParams = new URLSearchParams({
        q: `created:>${fromDate}`,
        sort: "stars",
        order: "desc",
        per_page: num_repositories.toString(),
      });
  
      const url = `https://api.github.com/search/repositories?${searchParams.toString()}`;
  
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Accept: "application/vnd.github.v3+json",
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data?.message || "Failed to fetch repositories");
      }
  
      const gitResponse = await Promise.all(
        data.items.map(async (repo: RepoProps) => {
            console.log(repo);
            
          const contributorsUrl = `${repo.contributors_url}`; // Fetch only 1 contributor to get the total count
          const contributorsResponse = await fetch(contributorsUrl, {
            method: "GET",
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
              Accept: "application/vnd.github.v3+json",
            },
          });
  
          const contributorsData = await contributorsResponse.json();
          const contributorsCount = contributorsData.length || 0;
  
          return {
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            forks_count: repo.forks_count,
            contributors_count: contributorsCount,
          };
        })
      );
  
      // Sort repositories based on contributors count
      const sortedRepos = gitResponse.sort(
        (a: RepoProps, b: RepoProps) => b.contributors_count - a.contributors_count
      );
  
      console.log(sortedRepos);
  
      return sortedRepos;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch repositories");
    }
  }
  